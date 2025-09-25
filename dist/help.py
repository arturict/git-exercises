from __future__ import annotations

def josephus(n: int, k: int) -> int:
  """
  Löst das Josephus-Problem rekursiv.

  Gibt die 1-basierte Position der letzten Person für das Josephus-Problem zurück.

  Anforderungen:
  - Basisfall: n == 1 -> 1
  - Rekursiver Schritt für n > 1 (Rekursion verwenden, keine Schleifen)
  """
  if n == 1:
    return 1
  else:
    return (josephus(n - 1, k) + k - 1) % n + 1


#---------------------------------------------------------------

def sum_nested(data: int | float | list | dict) -> float:
    """
    Summiert rekursiv alle Zahlen (int, float) in einer verschachtelten Struktur aus Listen
    und Dictionaries. Andere Datentypen werden ignoriert. Bool-Werte werden ausgeschlossen.
    Bei Dictionaries werden nur die Values berücksichtigt (Keys werden nicht aufsummiert).

     Parameter
    ----------
    data : int | float | list | dict
        Zahl, Liste oder Dictionary, beliebig tief verschachtelt.

    Rückgabewert
    ------------
    float
        Summe aller gefundenen numerischen Werte.
    """
    if isinstance(data, (int, float)) and not isinstance(data, bool):
        return float(data)
    elif isinstance(data, list):
        total_sum = 0.0
        for item in data:
            total_sum += sum_nested(item)
        return total_sum
    elif isinstance(data, dict):
        total_sum = 0.0
        for value in data.values():
            total_sum += sum_nested(value)
        return total_sum
    else:
        return 0.0
